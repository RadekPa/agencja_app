import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateOrConnectWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateOrConnectWithoutTblSubmissionsInput>;
export const tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
