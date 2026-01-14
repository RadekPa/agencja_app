import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './dictCopyTypeWhereUniqueInput.schema';
import { dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCopyTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema)])
}).strict();
export const dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateOrConnectWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateOrConnectWithoutTblTitEventsInput>;
export const dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectZodSchema = makeSchema();
