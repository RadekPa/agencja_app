import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblSubmEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)])
}).strict();
export const tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateOrConnectWithoutTblSubmEventsInput>;
export const tblSubmissionsCreateOrConnectWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
