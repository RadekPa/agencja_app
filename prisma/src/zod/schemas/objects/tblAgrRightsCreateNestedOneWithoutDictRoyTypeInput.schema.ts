import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRoyTypeInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgrRightsCreateNestedOneWithoutDictRoyTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateNestedOneWithoutDictRoyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateNestedOneWithoutDictRoyTypeInput>;
export const tblAgrRightsCreateNestedOneWithoutDictRoyTypeInputObjectZodSchema = makeSchema();
