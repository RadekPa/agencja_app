import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistDesc: z.string().max(30)
}).strict();
export const dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateWithoutTblAgrRightsInput>;
export const dictDistributionTypeCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
