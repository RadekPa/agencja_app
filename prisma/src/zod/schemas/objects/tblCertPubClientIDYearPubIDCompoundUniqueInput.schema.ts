import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.number().int(),
  Year: z.number().int(),
  PubID: z.number().int()
}).strict();
export const tblCertPubClientIDYearPubIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblCertPubClientIDYearPubIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubClientIDYearPubIDCompoundUniqueInput>;
export const tblCertPubClientIDYearPubIDCompoundUniqueInputObjectZodSchema = makeSchema();
