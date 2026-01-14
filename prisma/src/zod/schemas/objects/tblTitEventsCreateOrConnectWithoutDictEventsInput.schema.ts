import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsCreateWithoutDictEventsInputObjectSchema as tblTitEventsCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsCreateOrConnectWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateOrConnectWithoutDictEventsInput>;
export const tblTitEventsCreateOrConnectWithoutDictEventsInputObjectZodSchema = makeSchema();
