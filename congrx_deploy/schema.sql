-- Run this in your Supabase SQL editor (Dashboard → SQL Editor → New Query)

-- ── Members table ─────────────────────────────────────────────────────────────
create table if not exists members (
  id          integer primary key,
  name        text not null,
  handle      text not null unique,
  party       text not null,       -- 'R', 'D', 'I'
  chamber     text not null,       -- 'senate', 'house'
  state       text not null,
  district    text,                -- null for senators
  since       integer,
  committees  text[]
);

-- ── Tweets table ──────────────────────────────────────────────────────────────
create table if not exists tweets (
  id          text primary key,    -- Twitter's tweet ID
  member_id   integer references members(id),
  handle      text not null,
  name        text not null,
  party       text not null,
  state       text,
  district    text,
  chamber     text,
  text        text not null,
  likes       integer default 0,
  retweets    integer default 0,
  replies     integer default 0,
  posted_at   timestamptz,
  topic       text,                -- auto-classified: 'healthcare', 'economy', etc.
  scraped_at  timestamptz default now()
);

-- ── Indexes for fast queries ───────────────────────────────────────────────────
create index if not exists tweets_member_id_idx  on tweets(member_id);
create index if not exists tweets_posted_at_idx  on tweets(posted_at desc);
create index if not exists tweets_party_idx       on tweets(party);
create index if not exists tweets_chamber_idx     on tweets(chamber);
-- Full-text search index
create index if not exists tweets_text_fts_idx    on tweets using gin(to_tsvector('english', text));

-- ── Scrape log (track which handles have been scraped recently) ────────────────
create table if not exists scrape_log (
  handle      text primary key,
  last_scraped timestamptz default now(),
  tweet_count integer default 0
);

-- ── Row Level Security (allow public read, service-role write) ─────────────────
alter table members enable row level security;
alter table tweets  enable row level security;
alter table scrape_log enable row level security;

create policy "Public read members" on members for select using (true);
create policy "Public read tweets"  on tweets  for select using (true);
create policy "Service role all"    on members for all using (auth.role() = 'service_role');
create policy "Service role tweets" on tweets  for all using (auth.role() = 'service_role');
create policy "Service role log"    on scrape_log for all using (auth.role() = 'service_role');

-- ── Digest subscribers ────────────────────────────────────────────────────────
create table if not exists digest_subscribers (
  id          bigserial primary key,
  email       text not null unique,
  active      boolean default true,
  subscribed_at timestamptz default now(),
  source      text default 'website'
);

alter table digest_subscribers enable row level security;
create policy "Service role subscribers" on digest_subscribers for all using (auth.role() = 'service_role');

-- ── Digest log (track sends) ──────────────────────────────────────────────────
create table if not exists digest_log (
  id          bigserial primary key,
  sent_at     timestamptz default now(),
  recipients  integer,
  house_votes integer,
  senate_votes integer,
  status      text
);
