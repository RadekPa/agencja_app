import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema)]),
  where: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUpsertWithoutDictRoyTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithoutDictRoyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithoutDictRoyTypeInput>;
export const tblAgrRightsUpsertWithoutDictRoyTypeInputObjectZodSchema = makeSchema();
