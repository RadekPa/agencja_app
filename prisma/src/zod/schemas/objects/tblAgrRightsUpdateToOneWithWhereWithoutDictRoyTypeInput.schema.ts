import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema';
import { tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInput>;
export const tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInputObjectZodSchema = makeSchema();
