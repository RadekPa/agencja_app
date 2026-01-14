import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistDesc: z.string().max(30)
}).strict();
export const dictDistributionTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateManyInput>;
export const dictDistributionTypeCreateManyInputObjectZodSchema = makeSchema();
