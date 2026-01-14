import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  DistID: z.number().int().optional(),
  DistDesc: z.string().max(30),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUncheckedCreateInput>;
export const dictDistributionTypeUncheckedCreateInputObjectZodSchema = makeSchema();
