import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUpsertWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUpsertWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUpsertWithoutDictRoyTypeInput.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyTypeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyTypeInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgrRightsUpsertWithoutDictRoyTypeInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblAgrRightsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblAgrRightsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateToOneWithWhereWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithoutDictRoyTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema)]).optional()
}).strict();
export const tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInput>;
export const tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInputObjectZodSchema = makeSchema();
