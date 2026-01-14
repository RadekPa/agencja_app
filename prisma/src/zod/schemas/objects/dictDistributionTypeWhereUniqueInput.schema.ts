import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.number().int().optional()
}).strict();
export const dictDistributionTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeWhereUniqueInput>;
export const dictDistributionTypeWhereUniqueInputObjectZodSchema = makeSchema();
