import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedCreateWithoutTblCustTypesInput.schema';
import { dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateOrConnectWithoutTblCustTypesInput.schema';
import { dictCustTypesUpsertWithoutTblCustTypesInputObjectSchema as dictCustTypesUpsertWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUpsertWithoutTblCustTypesInput.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './dictCustTypesWhereUniqueInput.schema';
import { dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema as dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInput.schema';
import { dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema as dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUpdateWithoutTblCustTypesInput.schema';
import { dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema as dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema } from './dictCustTypesUncheckedUpdateWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCustTypesCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCustTypesCreateOrConnectWithoutTblCustTypesInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCustTypesUpsertWithoutTblCustTypesInputObjectSchema).optional(),
  connect: z.lazy(() => dictCustTypesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCustTypesUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUpdateWithoutTblCustTypesInputObjectSchema), z.lazy(() => dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema)]).optional()
}).strict();
export const dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema: z.ZodType<Prisma.dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInput>;
export const dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectZodSchema = makeSchema();
