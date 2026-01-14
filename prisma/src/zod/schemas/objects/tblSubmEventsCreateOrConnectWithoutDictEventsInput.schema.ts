import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsCreateWithoutDictEventsInputObjectSchema as tblSubmEventsCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateWithoutDictEventsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateOrConnectWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateOrConnectWithoutDictEventsInput>;
export const tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectZodSchema = makeSchema();
