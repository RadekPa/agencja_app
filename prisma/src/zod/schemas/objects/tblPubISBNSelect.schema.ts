import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersArgsObjectSchema as tblPublishersArgsObjectSchema } from './tblPublishersArgs.schema'

const makeSchema = () => z.object({
  PubID: z.boolean().optional(),
  PubISBN1: z.boolean().optional(),
  PubISBN2: z.boolean().optional(),
  tblPublishers: z.union([z.boolean(), z.lazy(() => tblPublishersArgsObjectSchema)]).optional()
}).strict();
export const tblPubISBNSelectObjectSchema: z.ZodType<Prisma.tblPubISBNSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNSelect>;
export const tblPubISBNSelectObjectZodSchema = makeSchema();
