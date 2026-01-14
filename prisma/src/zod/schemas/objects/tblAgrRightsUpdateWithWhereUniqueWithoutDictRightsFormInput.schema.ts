import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUpdateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRightsFormInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRightsFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRightsFormInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInput>;
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictRightsFormInputObjectZodSchema = makeSchema();
