import * as z from 'zod';

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable', 'Snapshot'])

export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;