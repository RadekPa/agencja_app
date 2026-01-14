import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblTitEventsInputObjectSchema as tblTitlesCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblTitEventsInput>;
export const tblTitlesCreateOrConnectWithoutTblTitEventsInputObjectZodSchema = makeSchema();
