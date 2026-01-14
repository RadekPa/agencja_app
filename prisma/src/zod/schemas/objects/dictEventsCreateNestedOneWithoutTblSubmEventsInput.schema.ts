import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsCreateWithoutTblSubmEventsInputObjectSchema as dictEventsCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblSubmEventsInput.schema';
import { dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema as dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateOrConnectWithoutTblSubmEventsInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './dictEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictEventsCreateOrConnectWithoutTblSubmEventsInputObjectSchema).optional(),
  connect: z.lazy(() => dictEventsWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictEventsCreateNestedOneWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsCreateNestedOneWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateNestedOneWithoutTblSubmEventsInput>;
export const dictEventsCreateNestedOneWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
