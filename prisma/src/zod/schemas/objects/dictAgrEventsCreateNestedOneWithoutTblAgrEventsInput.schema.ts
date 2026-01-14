import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateOrConnectWithoutTblAgrEventsInput.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './dictAgrEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictAgrEventsCreateOrConnectWithoutTblAgrEventsInputObjectSchema).optional(),
  connect: z.lazy(() => dictAgrEventsWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictAgrEventsCreateNestedOneWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsCreateNestedOneWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsCreateNestedOneWithoutTblAgrEventsInput>;
export const dictAgrEventsCreateNestedOneWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
