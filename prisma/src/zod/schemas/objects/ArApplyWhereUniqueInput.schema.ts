import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ApplyID: z.number().int().optional()
}).strict();
export const ArApplyWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArApplyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyWhereUniqueInput>;
export const ArApplyWhereUniqueInputObjectZodSchema = makeSchema();
