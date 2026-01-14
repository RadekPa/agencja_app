import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUpdateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUpdateWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedUpdateWithoutDictCopyTypeInput.schema';
import { tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitEventsUpdateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateWithoutDictCopyTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInput>;
export const tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
