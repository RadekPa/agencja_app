import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInput>;
export const tblAgrRightsUpdateManyWithWhereWithoutDictRoyPriceTypeInputObjectZodSchema = makeSchema();
