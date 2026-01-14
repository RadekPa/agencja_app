import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInput>;
export const tblAgrRightsUpdateManyWithWhereWithoutDictPriceTypeInputObjectZodSchema = makeSchema();
