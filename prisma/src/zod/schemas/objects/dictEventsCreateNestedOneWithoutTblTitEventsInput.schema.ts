import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsCreateWithoutTblTitEventsInputObjectSchema as dictEventsCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsCreateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblTitEventsInput.schema';
import { dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema as dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema } from './dictEventsCreateOrConnectWithoutTblTitEventsInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './dictEventsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema).optional(),
  connect: z.lazy(() => dictEventsWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictEventsCreateNestedOneWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsCreateNestedOneWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateNestedOneWithoutTblTitEventsInput>;
export const dictEventsCreateNestedOneWithoutTblTitEventsInputObjectZodSchema = makeSchema();
