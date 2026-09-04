# CST NEW Messenger

A clean private messaging UI starter for the CST Batch 2028 group.

## Current starter features
- Name + password login screen (UI)
- Automatic CST NEW 3rd → 4th → 5th → 6th → 7th → 8th → Batch 2028 naming
- Responsive dark messenger UI
- Inbox / Requests / Notes navigation
- Demo online friends
- Demo chat composer

## Important
This ZIP is a **starter UI**, not yet a production messaging backend. Before real friends can create accounts and chat, connect Supabase for authentication/database/realtime/storage and add WebRTC signaling for audio calls.

## Run
1. Install Node.js 20+.
2. `npm install`
3. `npm run dev`
4. Open the local URL.

## Vercel
Import the GitHub repository into Vercel. No secret keys are included in this ZIP.

## Automatic name date
Set `NEXT_PUBLIC_BATCH_START_DATE` in Vercel Environment Variables if the official 3rd-semester start date differs from 2026-09-04. Format:
`2026-09-04T00:00:00`
