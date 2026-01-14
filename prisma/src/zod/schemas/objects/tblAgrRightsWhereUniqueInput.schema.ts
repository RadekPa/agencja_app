import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrRightID: z.number().int().optional()
}).strict();
export const tblAgrRightsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblAgrRightsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsWhereUniqueInput>;
export const tblAgrRightsWhereUniqueInputObjectZodSchema = makeSchema();
