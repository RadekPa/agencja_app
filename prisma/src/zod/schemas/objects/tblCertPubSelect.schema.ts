import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.boolean().optional(),
  Year: z.boolean().optional(),
  PubID: z.boolean().optional(),
  DateSent: z.boolean().optional(),
  Original: z.boolean().optional()
}).strict();
export const tblCertPubSelectObjectSchema: z.ZodType<Prisma.tblCertPubSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubSelect>;
export const tblCertPubSelectObjectZodSchema = makeSchema();
