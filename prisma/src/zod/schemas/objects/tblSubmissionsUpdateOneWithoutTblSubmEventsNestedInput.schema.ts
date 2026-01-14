import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUpsertWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUpsertWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUpsertWithoutTblSubmEventsInput.schema';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './tblSubmissionsWhereInput.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUpdateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblSubmissionsUpsertWithoutTblSubmEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblSubmissionsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblSubmissionsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema)]).optional()
}).strict();
export const tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInput>;
export const tblSubmissionsUpdateOneWithoutTblSubmEventsNestedInputObjectZodSchema = makeSchema();
