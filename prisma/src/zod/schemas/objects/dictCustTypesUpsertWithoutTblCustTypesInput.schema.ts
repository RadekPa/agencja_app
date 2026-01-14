import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema as dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUpdateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedUpdateWithoutTblCustTypesInput.schema';
import { dictCustTypesCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './dictCustTypesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCustTypesCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema)]),
  where: z.lazy(() => dictCustTypesWhereInputObjectSchema).optional()
}).strict();
export const dictCustTypesUpsertWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesUpsertWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUpsertWithoutTblCustTypesInput>;
export const dictCustTypesUpsertWithoutTblCustTypesInputObjectZodSchema = makeSchema();
