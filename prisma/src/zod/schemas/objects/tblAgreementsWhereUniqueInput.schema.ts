import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.number().int().optional()
}).strict();
export const tblAgreementsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblAgreementsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsWhereUniqueInput>;
export const tblAgreementsWhereUniqueInputObjectZodSchema = makeSchema();
