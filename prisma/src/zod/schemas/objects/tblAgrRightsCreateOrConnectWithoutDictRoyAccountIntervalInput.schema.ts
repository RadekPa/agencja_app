import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInput>;
export const tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectZodSchema = makeSchema();
