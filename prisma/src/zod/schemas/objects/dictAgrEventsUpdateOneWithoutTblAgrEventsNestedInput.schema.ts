import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateOrConnectWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUpsertWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUpsertWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUpsertWithoutTblAgrEventsInput.schema';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './dictAgrEventsWhereInput.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './dictAgrEventsWhereUniqueInput.schema';
import { dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUpdateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictAgrEventsUpsertWithoutTblAgrEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictAgrEventsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictAgrEventsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictAgrEventsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema)]).optional()
}).strict();
export const dictAgrEventsUpdateOneWithoutTblAgrEventsNestedInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUpdateOneWithoutTblAgrEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUpdateOneWithoutTblAgrEventsNestedInput>;
export const dictAgrEventsUpdateOneWithoutTblAgrEventsNestedInputObjectZodSchema = makeSchema();
