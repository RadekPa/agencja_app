import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateWithoutDictRightsFormInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRightsFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRightsFormInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRightsFormInput>;
export const tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectZodSchema = makeSchema();
