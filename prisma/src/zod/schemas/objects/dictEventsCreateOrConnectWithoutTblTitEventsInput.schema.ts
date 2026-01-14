import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './dictEventsWhereUniqueInput.schema';
import { dictEventsCreateWithoutTblTitEventsInputObjectSchema as dictEventsCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsCreateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema)])
}).strict();
export const dictEventsCreateOrConnectWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsCreateOrConnectWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsCreateOrConnectWithoutTblTitEventsInput>;
export const dictEventsCreateOrConnectWithoutTblTitEventsInputObjectZodSchema = makeSchema();
