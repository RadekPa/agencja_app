import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitEventsInputObjectSchema as tblTitlesCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitEventsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitEventsInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateNestedOneWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblTitEventsInput>;
export const tblTitlesCreateNestedOneWithoutTblTitEventsInputObjectZodSchema = makeSchema();
