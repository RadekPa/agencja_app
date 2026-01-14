import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsCreateWithoutTblTitlesInputObjectSchema as tblTitEventsCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitEventsCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateOrConnectWithoutTblTitlesInput>;
export const tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
