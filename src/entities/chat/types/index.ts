export type Message =  { type: 'send'; message: string, status?: never }
| { type: 'answer'; message: string; status: 'waiting' | 'done' | 'streaming' }