import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateOrConnectWithoutTblTitEventsInput.schema';
import { dictCopyTypeUpsertWithoutTblTitEventsInputObjectSchema as dictCopyTypeUpsertWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUpsertWithoutTblTitEventsInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './dictCopyTypeWhereUniqueInput.schema';
import { dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema as dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInput.schema';
import { dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUpdateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedUpdateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCopyTypeUpsertWithoutTblTitEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictCopyTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictCopyTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictCopyTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema)]).optional()
}).strict();
export const dictCopyTypeUpdateOneWithoutTblTitEventsNestedInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateOneWithoutTblTitEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateOneWithoutTblTitEventsNestedInput>;
export const dictCopyTypeUpdateOneWithoutTblTitEventsNestedInputObjectZodSchema = makeSchema();
