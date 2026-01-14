import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUpdateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUpdateWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedUpdateWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitEventsUpdateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInput>;
export const tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
