import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateOrConnectWithoutTblTitEventsInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './dictCopyTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCopyTypeCreateOrConnectWithoutTblTitEventsInputObjectSchema).optional(),
  connect: z.lazy(() => dictCopyTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCopyTypeCreateNestedOneWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateNestedOneWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateNestedOneWithoutTblTitEventsInput>;
export const dictCopyTypeCreateNestedOneWithoutTblTitEventsInputObjectZodSchema = makeSchema();
