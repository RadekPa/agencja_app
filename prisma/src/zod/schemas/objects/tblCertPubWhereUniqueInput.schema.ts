import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCertPubClientIDYearPubIDCompoundUniqueInputObjectSchema as tblCertPubClientIDYearPubIDCompoundUniqueInputObjectSchema } from './tblCertPubClientIDYearPubIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  ClientID_Year_PubID: z.lazy(() => tblCertPubClientIDYearPubIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblCertPubWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblCertPubWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubWhereUniqueInput>;
export const tblCertPubWhereUniqueInputObjectZodSchema = makeSchema();
