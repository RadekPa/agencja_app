import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DistID: z.number().int().optional(),
  DistDesc: z.string()
}).strict();
export const dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInput>;
export const dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
