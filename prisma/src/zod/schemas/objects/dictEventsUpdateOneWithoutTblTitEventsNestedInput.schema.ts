import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsCreateWithoutTblTitEventsInputObjectSchema as dictEventsCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsCreateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblTitEventsInput.schema';
import { dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema as dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema } from './dictEventsCreateOrConnectWithoutTblTitEventsInput.schema';
import { dictEventsUpsertWithoutTblTitEventsInputObjectSchema as dictEventsUpsertWithoutTblTitEventsInputObjectSchema } from './dictEventsUpsertWithoutTblTitEventsInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './dictEventsWhereUniqueInput.schema';
import { dictEventsUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema as dictEventsUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema } from './dictEventsUpdateToOneWithWhereWithoutTblTitEventsInput.schema';
import { dictEventsUpdateWithoutTblTitEventsInputObjectSchema as dictEventsUpdateWithoutTblTitEventsInputObjectSchema } from './dictEventsUpdateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedUpdateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictEventsUpsertWithoutTblTitEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictEventsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictEventsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictEventsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictEventsUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema)]).optional()
}).strict();
export const dictEventsUpdateOneWithoutTblTitEventsNestedInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateOneWithoutTblTitEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateOneWithoutTblTitEventsNestedInput>;
export const dictEventsUpdateOneWithoutTblTitEventsNestedInputObjectZodSchema = makeSchema();
