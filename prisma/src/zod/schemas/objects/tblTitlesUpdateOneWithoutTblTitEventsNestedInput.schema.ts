import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitEventsInputObjectSchema as tblTitlesCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitEventsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitEventsInput.schema';
import { tblTitlesUpsertWithoutTblTitEventsInputObjectSchema as tblTitlesUpsertWithoutTblTitEventsInputObjectSchema } from './tblTitlesUpsertWithoutTblTitEventsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema as tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema } from './tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInput.schema';
import { tblTitlesUpdateWithoutTblTitEventsInputObjectSchema as tblTitlesUpdateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUpdateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitlesUpsertWithoutTblTitEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema)]).optional()
}).strict();
export const tblTitlesUpdateOneWithoutTblTitEventsNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateOneWithoutTblTitEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateOneWithoutTblTitEventsNestedInput>;
export const tblTitlesUpdateOneWithoutTblTitEventsNestedInputObjectZodSchema = makeSchema();
