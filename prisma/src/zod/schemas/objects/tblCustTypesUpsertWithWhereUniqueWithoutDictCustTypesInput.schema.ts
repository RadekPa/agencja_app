import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema as tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUpdateWithoutDictCustTypesInput.schema';
import { tblCustTypesUncheckedUpdateWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedUpdateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedUpdateWithoutDictCustTypesInput.schema';
import { tblCustTypesCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateWithoutDictCustTypesInput.schema';
import { tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutDictCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUncheckedUpdateWithoutDictCustTypesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema)])
}).strict();
export const tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInput>;
export const tblCustTypesUpsertWithWhereUniqueWithoutDictCustTypesInputObjectZodSchema = makeSchema();
