import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutTblSubmEventsInput.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema).optional(),
  connect: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblSubmissionsCreateNestedOneWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateNestedOneWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateNestedOneWithoutTblSubmEventsInput>;
export const tblSubmissionsCreateNestedOneWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
