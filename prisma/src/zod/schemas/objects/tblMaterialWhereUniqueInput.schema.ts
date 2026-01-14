import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatID: z.number().int().optional()
}).strict();
export const tblMaterialWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblMaterialWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialWhereUniqueInput>;
export const tblMaterialWhereUniqueInputObjectZodSchema = makeSchema();
