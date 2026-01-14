import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblFraVAT_NewFVNrFVDateCompoundUniqueInputObjectSchema as tblFraVAT_NewFVNrFVDateCompoundUniqueInputObjectSchema } from './tblFraVAT_NewFVNrFVDateCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  FVNr_FVDate: z.lazy(() => tblFraVAT_NewFVNrFVDateCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblFraVAT_NewWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewWhereUniqueInput>;
export const tblFraVAT_NewWhereUniqueInputObjectZodSchema = makeSchema();
