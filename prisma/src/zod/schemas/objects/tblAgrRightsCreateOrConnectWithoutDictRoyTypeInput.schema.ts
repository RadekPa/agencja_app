import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRoyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRoyTypeInput>;
export const tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectZodSchema = makeSchema();
